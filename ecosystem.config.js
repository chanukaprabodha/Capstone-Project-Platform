module.exports = {
    apps: [
        {
            name: "cloud-sql-auth-proxy",
            script: "./cloud-sql-proxy its-2130-eca-486806:asia-southeast1:mysql-vm its-2130-eca-486806:asia-southeast1:postgresql-vm --private-ip",
            log_file: "./logs/cloud-sql-auth-proxy.log",
        },
        {
            name: "config-server",
            script: "java -jar ./config-server/target/Config-Server-1.0.0.jar",
            log_file: "./logs/config-server.log",
        },
        {
            name: "service-registry",
            script: "java -jar ./service-registry/target/Service-Registry-1.0.0.jar",
            log_file: "./logs/service-registry.log",
        },
        {
            name: "api-gateway",
            script: "java -jar ./api-gateway/target/Api-Gateway-1.0.0.jar",
            log_file: "./logs/api-gateway.log",
        }
        /*{
            name: "config-server",
            script: "java",
            args: "-jar ./config-server/target/Config-Server-1.0.0.jar"
        },
        {
            name: "service-registry",
            script: "java",
            args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar"
        },
        {
            name: "api-gateway",
            script: "java",
            args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar"
        }*/
    ]
}
