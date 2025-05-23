// PeerJS server configuration
const isProduction = process.env.NODE_ENV === 'production';

export const peerConfig = {
  SERVER_URL: isProduction
    ? process.env.PEER_SERVER_URL || 'your-peerjs-server.onrender.com'
    : 'localhost',

  SERVER_PORT: isProduction ? 443 : 9000,

  SERVER_PATH: '/peerjs',

  // PeerJS configuration options
  CONFIG: {
    debug: 2, // Log level (0=none, 1=errors, 2=warnings, 3=all)
    secure: isProduction, // Use HTTPS in production
    config: {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:global.stun.twilio.com:3478' }
      ]
    }
  }
};

// Helper function to get full server URL
export const getPeerServerUrl = () => {
  const { SERVER_URL, SERVER_PORT, SERVER_PATH } = peerConfig;
  return {
    host: SERVER_URL,
    port: SERVER_PORT,
    path: SERVER_PATH,
    secure: isProduction
  };
};
