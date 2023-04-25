var btn =document.getElementById('btn')
var p1 = document.getElementById('p1')
let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon"
]
function change(){
    let num =Math.floor(Math.random()*7)
    p1.innerHTML=quotes[num]
}
btn.addEventListener('click',change)
p1.addEventListener('click',change)
