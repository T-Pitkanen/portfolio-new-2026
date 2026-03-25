'use client';

export default function VideoBg() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1, filter: 'blur(8px)' }}
      >
        <source src="/Still_Nature_Video_Generated.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
    </>
  );
}
