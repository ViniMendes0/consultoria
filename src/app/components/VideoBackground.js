const VideoBackground = () => {
  return (
    <div className="-top-20 relative w-full min-h-screen sm:min-h-[500px] md:h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="/videoc.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
