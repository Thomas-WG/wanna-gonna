module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-credential-secret",
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$HAMOhViMExgaa2K4kpfFmu54GQKA0THoyTe74U5wGw9PfShgskr16", // bcrypt hash of "password"
            permissions: "*"
        }]
    },
    httpNodeAuth: { user: "user", pass: "$2a$12$55dYbsYy.x2xMxsGu8gB2OfP4Vxq/4HAHNlD1ongJRNEEt3NNSBN." },
    functionGlobalContext: {}
};
