import React, { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const scriptId = "tawkToScript";
    
    // Avoid injecting the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://embed.tawk.to/6781f86749e2fd8dfe05e6ce/1ih9r4lr2";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkTo;