import VideoCall from "@/components/video-call/video-call";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="bg-white text-6xl font-bebas font-bold">ZEGOCLOUD</h1>
        <VideoCall />
      </div>
    </main>
  );
}
