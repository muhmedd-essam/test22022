function Click() {
    console.log("sss")
    let array = ["Sprite"];
    let x = document.getElementById("input").value;
    let resultLabel = document.getElementById("resultLabel");
    let result = document.getElementById("result");

    if (array.includes(x)) {
        console.log("Element found in the array.");
        resultLabel.textContent = "Element found in the array.";
        result.textContent = "Done";
    } else {
        console.log("Element not found in the array.");
        resultLabel.textContent = "Element not found in the array.";
        result.textContent = "";
    }
}