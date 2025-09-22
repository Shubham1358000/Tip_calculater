const button = document.getElementById("btn");
        const bill = document.getElementById("bill");
        const tip = document.getElementById("tip");
        const total = document.getElementById("sum");

        function calculateTip() {
            const billamt = bill.value;
            const tipamt = tip.value;
            const totalamt = billamt * (1 + tipamt / 100);
            total.innerText = `₹${totalamt.toFixed(2)}`;
            console.log(total);
        }

        button.addEventListener("click", calculateTip);

