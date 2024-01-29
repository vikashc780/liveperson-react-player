import "./App.css";
import VoiceBasePlayer from "@voicebase/react-player";

import VoiceBasePlayerJSON from "./assets/RE3ea081b73c7c8361248add4cb8f490f7.json";

export default function App() {
  const config = {
    mediaUrl: "/RE3ea081b73c7c8361248add4cb8f490f7.ogg",
    analyticsUrl: VoiceBasePlayerJSON,
  };
  return (
    <VoiceBasePlayer
      mediaUrl={config.mediaUrl}
      analytics={config.analyticsUrl}
      analyticsFormat="ANALYTICS_SCHEMA_VERSION_V3"
    />
  );
}
