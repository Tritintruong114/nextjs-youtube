import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="no-scrollbar">
      <div className="h-screen w-screen flex justify-center items-center">
        {profile.map((data, index) => {
          const {
            fullName,
            fullBio,
            headline,
            profileImage,
            shortBio,
            location,
            email,
            resumeURL,
            socialLinks,
            skills,
          } = data;
          return (
            <>
              <div key={index} className="">
                <p>{headline}</p>
                <h1 className="bg-white text-6xl font-bebas font-bold">
                  {fullName}
                </h1>
                <div>
                  <Image
                    src={profileImage.image}
                    alt={profileImage.alt}
                    width={320}
                    height={320}
                  />
                  <div>
                    <PortableText value={fullBio} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
