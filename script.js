function expectedDeliveryDate() {
    // Get the inputs
    let lmp = new Date(document.getElementById("lmp").value);


    // Calculate the edd
    /* Add 40 weeks to lmp */

    let edd = new Date(lmp.getTime() + 40 * 7 * 24 * 3600 * 1000);

    // display result

    document.getElementById('edd').value = edd.toDateString();
}