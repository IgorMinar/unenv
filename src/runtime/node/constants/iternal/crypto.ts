export const OPENSSL_VERSION_NUMBER = 0;
export const SSL_OP_ALL = 2_147_485_780;
export const SSL_OP_ALLOW_NO_DHE_KEX = 1024;
export const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION = 262_144;
export const SSL_OP_CIPHER_SERVER_PREFERENCE = 4_194_304;
export const SSL_OP_CISCO_ANYCONNECT = 32_768;
export const SSL_OP_COOKIE_EXCHANGE = 8192;
export const SSL_OP_CRYPTOPRO_TLSEXT_BUG = 2_147_483_648;
export const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS = 2048;
export const SSL_OP_LEGACY_SERVER_CONNECT = 4;
export const SSL_OP_NO_COMPRESSION = 131_072;
export const SSL_OP_NO_ENCRYPT_THEN_MAC = 524_288;
export const SSL_OP_NO_QUERY_MTU = 4096;
export const SSL_OP_NO_RENEGOTIATION = 1_073_741_824;
export const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION = 65_536;
export const SSL_OP_NO_SSLv2 = 0;
export const SSL_OP_NO_SSLv3 = 33_554_432;
export const SSL_OP_NO_TICKET = 16_384;
export const SSL_OP_NO_TLSv1 = 67_108_864;
export const SSL_OP_NO_TLSv1_1 = 268_435_456;
export const SSL_OP_NO_TLSv1_2 = 134_217_728;
export const SSL_OP_NO_TLSv1_3 = 536_870_912;
export const SSL_OP_PRIORITIZE_CHACHA = 2_097_152;
export const SSL_OP_TLS_ROLLBACK_BUG = 8_388_608;
export const ENGINE_METHOD_RSA = 1;
export const ENGINE_METHOD_DSA = 2;
export const ENGINE_METHOD_DH = 4;
export const ENGINE_METHOD_RAND = 8;
export const ENGINE_METHOD_EC = 2048;
export const ENGINE_METHOD_CIPHERS = 64;
export const ENGINE_METHOD_DIGESTS = 128;
export const ENGINE_METHOD_PKEY_METHS = 512;
export const ENGINE_METHOD_PKEY_ASN1_METHS = 1024;
export const ENGINE_METHOD_ALL = 65_535;
export const ENGINE_METHOD_NONE = 0;
export const DH_CHECK_P_NOT_SAFE_PRIME = 2;
export const DH_CHECK_P_NOT_PRIME = 1;
export const DH_UNABLE_TO_CHECK_GENERATOR = 4;
export const DH_NOT_SUITABLE_GENERATOR = 8;
export const RSA_PKCS1_PADDING = 1;
export const RSA_SSLV23_PADDING = 2;
export const RSA_NO_PADDING = 3;
export const RSA_PKCS1_OAEP_PADDING = 4;
export const RSA_X931_PADDING = 5;
export const RSA_PKCS1_PSS_PADDING = 6;
export const RSA_PSS_SALTLEN_DIGEST = -1;
export const RSA_PSS_SALTLEN_MAX_SIGN = -2;
export const RSA_PSS_SALTLEN_AUTO = -2;
export const defaultCoreCipherList =
  "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA";
export const TLS1_VERSION = 0;
export const TLS1_1_VERSION = 0;
export const TLS1_2_VERSION = 0;
export const TLS1_3_VERSION = 0;
export const POINT_CONVERSION_COMPRESSED = 2;
export const POINT_CONVERSION_UNCOMPRESSED = 4;
export const POINT_CONVERSION_HYBRID = 6;
export const defaultCipherList = "";
