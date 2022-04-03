module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f28c0b64db667b0b013c5da627e9b4b4'),
  },
});
