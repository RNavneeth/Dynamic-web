/**
 * ==========================================================================
 * VORTEX STUDIOS - JWT EDUCATIONAL SANDBOX
 * ==========================================================================
 * 
 * This sandbox demonstrates how JSON Web Tokens (JWT) are structured, signed,
 * and verified under the hood. It uses ONLY native Node.js libraries ('crypto'),
 * making it completely self-contained with no npm dependencies required.
 * 
 * A JWT consists of three parts separated by dots (.):
 * 1. HEADER    - Defines the signing algorithm and token type.
 * 2. PAYLOAD   - Contains claims (user ID, permissions, expiration).
 * 3. SIGNATURE - Verifies that the sender is who they say they are.
 */

const crypto = require('crypto');

// 1. BASE64URL HELPER FUNCTIONS
// JWT uses Base64Url encoding (removes '=', replaces '+' with '-', and '/' with '_')
function base64urlEncode(str) {
    return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

function base64urlDecode(str) {
    // Add back padding if needed
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
        base64 += '=';
    }
    return Buffer.from(base64, 'base64').toString('utf8');
}

// 2. THE SIGNING ALGORITHM (HMAC-SHA256)
// This creates a secure signature of the message using a secret key.
function createHmacSha256Signature(secret, message) {
    return crypto
        .createHmac('sha256', secret)
        .update(message)
        .digest('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// ==========================================================================
// CORE FLOW: SIGNING, DECODING & VERIFYING TOKENS
// ==========================================================================

class LocalJWTService {
    constructor(secret) {
        this.secret = secret;
    }

    /**
     * Step 1: Sign and Generate a JWT
     */
    generateToken(payload) {
        // Header is always fixed for HMAC-SHA256 (HS256)
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };

        // Add standard registered claims like 'iat' (issued at)
        const enrichedPayload = {
            ...payload,
            iat: Math.floor(Date.now() / 1000)
        };

        console.log("\n[1] --- ORIGINAL DATA STATE ---");
        console.log("Header Data: ", header);
        console.log("Payload Claims: ", enrichedPayload);

        // Encode Header & Payload to Base64Url strings
        const encodedHeader = base64urlEncode(JSON.stringify(header));
        const encodedPayload = base64urlEncode(JSON.stringify(enrichedPayload));

        console.log("\n[2] --- ENCODING STEPS ---");
        console.log("Base64Url Header:  ", encodedHeader);
        console.log("Base64Url Payload: ", encodedPayload);

        // Join encoded items with a dot (this is the unsigned message)
        const unsignedToken = `${encodedHeader}.${encodedPayload}`;

        // Create the signature using the private secret
        const signature = createHmacSha256Signature(this.secret, unsignedToken);
        console.log("Created Signature: ", signature);

        // The final token is all three parts joined by dots
        const finalToken = `${unsignedToken}.${signature}`;
        return finalToken;
    }

    /**
     * Step 2: Read claims without verifying the signature (Base64 decoding)
     * Anyone can decode a JWT—never store sensitive data like passwords inside!
     */
    decodeToken(token) {
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error("Invalid JWT token format structure");
        }

        const decodedPayload = base64urlDecode(parts[1]);
        return JSON.parse(decodedPayload);
    }

    /**
     * Step 3: Authenticate / Verify that the token is valid & untampered
     */
    verifyToken(token) {
        const parts = token.split('.');
        if (parts.length !== 3) {
            return { valid: false, reason: "Malformed token parts count" };
        }

        const [encodedHeader, encodedPayload, receivedSignature] = parts;
        const unsignedToken = `${encodedHeader}.${encodedPayload}`;

        // Recreate the signature locally using the secret and the received header/payload
        const expectedSignature = createHmacSha256Signature(this.secret, unsignedToken);

        // Verify if signatures match
        if (receivedSignature !== expectedSignature) {
            return { valid: false, reason: "Signature mismatch! Token has been tampered with or signed with an incorrect secret." };
        }

        // Validate expiration
        const payload = JSON.parse(base64urlDecode(encodedPayload));
        if (payload.exp && Date.now() / 1000 > payload.exp) {
            return { valid: false, reason: "Token validation timeframe expired" };
        }

        return { valid: true, payload };
    }
}

// ==========================================================================
// RUNNING THE LEARNING SANDBOX DEMONSTRATION
// ==========================================================================

// Our top secret key used for signing tokens (keep this safe!)
const SERVER_SECRET_KEY = 'vortex-cyber-secret-key-1337';

const jwtService = new LocalJWTService(SERVER_SECRET_KEY);

console.log("==========================================================================");
console.log("⚡ STARTING JWT SANDBOX DEMO");
console.log("==========================================================================");

// 1. GENERATE A NEW VALID TOKEN
const gamerClaims = {
    userId: 'uuid-19842-active',
    username: 'ViperX',
    role: 'Moderator',
    exp: Math.floor(Date.now() / 1000) + 3600 // Expire in 1 hour
};

const token = jwtService.generateToken(gamerClaims);

console.log("\n[3] --- FINAL GENERATED JWT ---");
console.log("\x1b[36m%s\x1b[0m", token);

// 2. VERIFY THE VALID TOKENS
console.log("\n[4] --- VERIFICATION PIPELINE ---");
const verificationResult = jwtService.verifyToken(token);
console.log("Valid Verification Result: ", verificationResult);

// 3. TAMPER SIMULATION (Let's pretend a hacker edits the claims to upgrade their role)
console.log("\n[5] --- SIMULATED ATTACK & TAMPER TEST ---");
const parts = token.split('.');
// Hackers decodes the payload
const payloadObj = JSON.parse(base64urlDecode(parts[1]));
// Hacker tries to change role to 'Admin'
payloadObj.role = 'SuperAdmin';
// Hacker re-encodes the tampered payload
const tamperedPayload = base64urlEncode(JSON.stringify(payloadObj));
// Hacker constructs the new token keeping the OLD signature
const tamperedToken = `${parts[0]}.${tamperedPayload}.${parts[2]}`;

console.log("Original Token: ", token.substring(0, 80) + "...");
console.log("Tampered Token: ", tamperedToken.substring(0, 80) + "...");

// Run the verification on the tampered token
const attackVerification = jwtService.verifyToken(tamperedToken);
console.log("\x1b[31m%s\x1b[0m", "Verification Result for Tampered Token: ", attackVerification);

console.log("\n==========================================================================");
console.log("🎓 SANDBOX TEST COMPLETE: Signatures guarantee token integrity!");
console.log("==========================================================================");
console.log("👉 To execute this code in your terminal, run: node jwt_demo.js\n");
