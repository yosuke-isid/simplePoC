import UnwalletProvider from "unwallet-provider";

globalThis.WebSocket = WebSocket;

async function connectWallet() {
    try {
        const unwalletProvider = new UnwalletProvider();
        console.log("UnwalletProvider initialized");
    } catch (error) {
        console.error("Error initializing UnwalletProvider:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const connectWalletButton = document.getElementById("connectWalletButton");
    if (connectWalletButton) {
        connectWalletButton.addEventListener("click", connectWallet);
    }
});