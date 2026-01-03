const initialPortfolio = 100000;

const trades = [
    { stock: "TCS", buy: 3200, sell: 3350, qty: 10 },
    { stock: "Infosys", buy: 1450, sell: 1400, qty: 15 },
    { stock: "Reliance", buy: 2500, sell: 2650, qty: 8 },
    { stock: "HDFC Bank", buy: 1600, sell: 1580, qty: 12 },
    { stock: "ITC", buy: 420, sell: 450, qty: 20 }
];

let totalProfit = 0;
const tableBody = document.getElementById("tradeTable");

trades.forEach(trade => {
    const profit = (trade.sell - trade.buy) * trade.qty;
    totalProfit += profit;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${trade.stock}</td>
        <td>${trade.buy}</td>
        <td>${trade.sell}</td>
        <td>${trade.qty}</td>
        <td class="${profit >= 0 ? 'profit' : 'loss'}">
            ${profit}
        </td>
    `;

    tableBody.appendChild(row);
});

document.getElementById("totalProfit").innerHTML =
    `Total Profit / Loss: <strong>₹${totalProfit}</strong>`;

document.getElementById("finalValue").innerHTML =
    `Final Portfolio Value: <strong>₹${initialPortfolio + totalProfit}</strong>`;
