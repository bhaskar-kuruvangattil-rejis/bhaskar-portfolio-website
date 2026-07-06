"use client";

import { useEffect } from "react";

const WIDGET_SCRIPT_SRC =
  "https://www.3beeez.com/widget-script?installToken=ba30146af3b46e896dbf88757ebdee197a4c66f0&position=bottom-right";

export default function BeeeezWidget() {
  useEffect(() => {
    if (document.querySelector('script[data-beeeez-widget="true"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-beeeez-widget", "true");
    document.body.appendChild(script);
  }, []);

  return null;
}
