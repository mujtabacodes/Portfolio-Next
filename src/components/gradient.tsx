const GradientOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center -z-50 pointer-events-none">
      <div className="w-[700px] h-[400px] bg-gradient-to-r   from-[#007ccc] via-purple-500 to-pink-500 rounded-full blur-[250px]"></div>
    </div>
  );
};

export default GradientOverlay;
