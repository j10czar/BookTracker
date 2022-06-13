var library = []

var user_title
var user_author
var user_pagenums

var cur_card = 1


function Book(a,t,n){
    this.author = a
    this.title = t
    this.pagenum = n
    this.read = false
}



function addBookToLibrary(b){

    const container = document.createElement("div")
    container.setAttribute("class","book_box")
    container.setAttribute("id","div"+cur_card)

    const h3 = document.createElement("h3")
    h3.innerText = b.title

    const p1 = document.createElement("p")
    p1.innerText ="Author: "+b.author

    const p2 = document.createElement("p")
    p2.innerText = "Pages: "+b.pagenum

    const rbutton = document.createElement("button")
    rbutton.innerHTML="Remove"
    rbutton.setAttribute("id","r"+cur_card)
    rbutton.setAttribute("type","button")
    rbutton.setAttribute("class","remove")

    const mbutton = document.createElement("button")
    mbutton.innerHTML="Read"
    mbutton.setAttribute("id","m"+cur_card)
    mbutton.setAttribute("type","button")
    mbutton.setAttribute("class","read")

    container.appendChild(h3)
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(mbutton)
    container.appendChild(rbutton)
    

    document.body.append(container)
    cur_card += 1
}

document.getElementById("add_book").onclick = function(){
    user_title = prompt("What is the title of your book?")
    user_author = prompt("What is the author of your book?")
    user_pagenums = prompt("How many pages are in your book?")
    var user_book = new Book(user_author,user_title,user_pagenums)
    library.push(user_book) 
    addBookToLibrary(user_book)
}




