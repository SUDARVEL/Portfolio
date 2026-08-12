import { GalleryRoom } from "@/components/GalleryRoom";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-muted uppercase">Gallery</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Spatial room</h1>
        <p className="mt-5 max-w-2xl text-muted">
          An optional wow layer on top of the editorial work path — orbit the frames, then dive
          into case studies.
        </p>
        <div className="mt-12">
          <GalleryRoom />
        </div>
      </div>
    </section>
  );
}
