import { groq } from "next-sanity";
import { client } from "../lib/client";

export type ContentType = {
  type: string;
  excerpt: string;
  heading: string;
  image: {
    _type: string;
    asset: any;
  };
};

export type ProjectType = {
  type: string;
  excerpt: string;
  projectname: string;
  tagline: string;
  location: string;
  url: string;
  imageUrls: ImageType[];
};

export type ImageType = {
  url: string;
};

export async function getServicesPage(slug: string) {
  const getPageQuery = groq`*[_type == "page" && slug.current == ${slug}][0]{
      'Heading':title,
      // textWithIllustration
      'Content':pageBuilder[][_type == "textWithIllustration"]{
      "type": _type,
      excerpt,
      heading,
      image
    },
      // gallery
        'Gallery':pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls':images[].asset->{
        'url':url
      }
    },
      // callToAction
      'CallToAction':pageBuilder[][_type == "callToAction"][0]{
      _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
      },

    'Video':pageBuilder[][_type == "video"][0]{
    videoLabel,
    url
    },

    'FormContact':pageBuilder[][_type == "form"][0]{
    label,
    heading,
    form
    },

  }`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getWorksPage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'works'][0]{
    'Heading':title,
    slug,
    'Hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      heading,
      tagline
    },
    

    'Content':pageBuilder[][_type == "project"]{
      "type": _type,
      excerpt,
      tagline,
      projectname,
      location,
      url,
     'imageUrls':images[].asset->{
        'url':url
      }
    },
    
      'CallToAction':pageBuilder[][_type == "callToAction"][0]{
      _type == "callToAction" => @-> {
      _type,
      title,
      label,
      link
    }
  }
  
}`;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}

export async function getGalleryPage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'gallery'][0]{
    'Heading':title,
    slug,

        'Gallery':pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls':images[].asset->{
        'url':url
      }
    },
    

}`;
  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
