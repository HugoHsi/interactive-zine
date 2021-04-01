// define variables
let king = document.querySelector(".king");
let cladeOne = document.querySelector(".clade1");
let cladeTwo = document.querySelector(".clade2");
let cladeThree = document.querySelector(".clade3");
let order = document.querySelector(".order");
let family = document.querySelector(".family");
let subFamily = document.querySelector(".subfamily");
let genus = document.querySelector(".genus");
let species = document.querySelector(".species");

// add eventlistener for king
king.addEventListener("mouseover", function() {
    king.textContent = "Plantae";
});

king.addEventListener("mouseout", function() {
    king.textContent = "Kingdom";
});

// add eventlistener for clade1
cladeOne.addEventListener("mouseover", function() {
    cladeOne.textContent = "Tracheophytes";
});

cladeOne.addEventListener("mouseout", function() {
    cladeOne.textContent = "Clade";
});

// add eventlistener for clade2
cladeTwo.addEventListener("mouseover", function() {
    cladeTwo.textContent = "Angiosperms";
});

cladeTwo.addEventListener("mouseout", function() {
    cladeTwo.textContent = "Clade";
});

// add eventlistener for clade3
cladeThree.addEventListener("mouseover", function() {
    cladeThree.textContent = "Monocots";
});

cladeThree.addEventListener("mouseout", function() {
    cladeThree.textContent = "Clade";
});

// add eventlistener for order
order.addEventListener("mouseover", function() {
    order.textContent = "Asparagales";
});

order.addEventListener("mouseout", function() {
    order.textContent = "Order";
});

// add eventlistener for family
family.addEventListener("mouseover", function() {
    family.textContent = "Orchidaceae";
});

family.addEventListener("mouseout", function() {
    family.textContent = "Family";
});

// add eventlistener for subfamily
subFamily.addEventListener("mouseover", function() {
    subFamily.textContent = "Epidendroideae";
});

subFamily.addEventListener("mouseout", function() {
    subFamily.textContent = "Subfamily";
});

// add eventlistener for genus
genus.addEventListener("mouseover", function() {
    genus.textContent = "Acianthera";
});

genus.addEventListener("mouseout", function() {
    genus.textContent = "Genus";
});

// add eventlistener for species
species.addEventListener("mouseover", function() {
    species.textContent = "A. Marumbyana";
});

species.addEventListener("mouseout", function() {
    species.textContent = "Species";
});