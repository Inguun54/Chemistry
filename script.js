    function showColorChange(element) {
        const elementName = document.getElementById("element-name");
        const elementInside = document.getElementById("element-inside");
    
        const colorChanges = {
        Li: {
            name: 'Lithium',
            color: 'red',
        },
        Na: {
            name: 'Sodium',
            color: 'yellow',
        },
        K: {
            name: 'Potassium',
            color: '#C8A2C8',
        },
        Rb: {
            name: 'Rubidium',
            color: '#FFC7FF',
        },
        Ca: {
            name: "Calcium",
            color: "#FF4500",
        },
        Sr: {
            name: "Strontium",
            color: "#C21E56",
        }
        };
    
        if (colorChanges[element]) {
        elementName.innerText = `${colorChanges[element].name} when heated`;
        elementInside.style.backgroundColor = colorChanges[element].color;
        
        elementInside.classList.add('heating');
        
        setTimeout(() => {
            elementInside.classList.remove('heating');
        }, 1000); 
        } else {
        elementName.innerText = 'Element not found';
        elementInside.style.backgroundColor = 'white';
        elementInside.classList.remove('heating');
        }
    }
    