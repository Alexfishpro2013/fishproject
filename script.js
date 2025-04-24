const fishList = [
    "250px-Magma_Leviathan", "800px-Orca", "The_Kraken",  "250px-Crystallized_Seadragon", "noFilter"
]
catchfish = 0
gamestarted = false
//візьми гейм та зміни його дісплей на флекс
//отримати елемент за id
//document.getElementById("game").style = "display: flex;"
//конкатенація - коли додаються декілька рядкі у один рядок
const maxX = 1000 - 400 // максимальна ширина
const maxY = 320-80// максимальна висота

//створиити функцію openGame()
//отримувати елемент game та змінювати його style.display = "flex"
//створти змінну геймСтартед. на початку вона має бути фолс, а коли виконується опенГейм - змінюватися на тру 
function openGame(){ 
document.getElementById ("game").style.display = "flex"
gamestarted = true
fishing()
}


function fishing(){ 
    for (let index = 0; index < 100 && gamestarted == true; index++) {
        setTimeout(() => {
            console.log(index)
            randomFish = Math.floor(Math.random()*fishList.length) //випадкове число
            fishImage = "static/photos/fish list/" + fishList[randomFish] + ".webp" //назва зображення випадкової риби
            document.getElementById("magma").src = fishImage //змінюємо посилання на рандомну рибу
            const randomX = Math.random()*maxX// випадкова координата для left
            const randomY = Math.random()*maxY//випадкова координата для top
            document.getElementById("magma").style.marginLeft = randomX+"px" //рухаємо рибу вліво-вправо
            document.getElementById("magma").style.marginTop = randomY+"px" //рухаємо рибу вгору-вниз                
        }, 1000 * index)  
    }   
//delay - затримка. щоб зробити затримку використовується команда setTimeout()
//fishing() // якщо написати назву функції - вона виконається
}
function excelent() { 
    document.getElementById("fishaudio").currentTime=0
    document.getElementById("fishaudio").play()
    
    //play - програти (включити звук)
    //currentTime - час, з якого гратиметься звук
    catchfish = catchfish + 1 //збільшуємо рахунок зловлених риб
    document.getElementById("fishingradar").innerText = "you catch " + catchfish + " fish" //додаємо кількість зловлених риб до тексту
}

// створити функцію trade()
// функція має спрацювати коли користувач натискає напис Trade 
// промпт("Яку рибу ти хочеш обміняти?")
// промпт("Скільки риби ти хочеш обміняти")
function trade(){ 
prompt(" what fish you wont trade?")
prompt("how many fish you wont trade?")
}
function closeGame(){ 
document.getElementById("game").style = "display: none;"
gamestarted = false
}


//створи функцію (close), яка буде закривати game
//створи кнопку у game та підключи до неї функцію



//choose = confirm("do you wont fishing?")
    // = - це записати значення у змінну (а = 1)
    // == - це перевірити два значення, чи вони не однакові
//if(choose==true){ 
//goal = prompt("how much fish you wont to catch")
//}
//else {
//alert("АЛЬО РИБАЛИТИ ТРЕБА")
//}

/* 
теги тексту, теги блоків, теги посилань, кнопки, зображення, аудіо
робота з кольорами, ховер, шрифти, флекс
онклік, рандоми, зміна стилів, зміна тегів

вайтліст whitelist
*/