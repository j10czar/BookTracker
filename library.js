var library = []

var user_title
var user_author
var user_pagenums

var cur_index = 0

class Book{
    constructor(a,t,n,i){
        this.author = a
        this.title = t
        this.pagenum = n
        this.read = false
        this.index = i

    }
    createCard(){
        const container = document.createElement("div")
        container.setAttribute("class","book_box")
        container.setAttribute("id","div"+this.index)

        const h3 = document.createElement("h3")
        h3.innerText = this.title

        const p1 = document.createElement("p")
        p1.innerText ="Author: "+this.author

        const p2 = document.createElement("p")
        p2.innerText = "Pages: "+this.pagenum

        const rbutton = document.createElement("button")
        rbutton.innerHTML="Remove"
        rbutton.setAttribute("id","r"+this.index)
        rbutton.setAttribute("type","button")
        rbutton.setAttribute("class","remove")
        rbutton.addEventListener("click", () => {
            document.getElementById("div"+this.index).remove()


        })


        const mbutton = document.createElement("button")
        mbutton.innerHTML="Read"
        mbutton.setAttribute("id","m"+this.index)
        mbutton.setAttribute("type","button")
        mbutton.setAttribute("class","read")
        mbutton.addEventListener("click", () => {
            document.getElementById("div"+this.index).style.borderColor="rgb(77, 247, 91)"
            document.getElementById("m"+this.index).remove()
            const read = document.createElement("p")
            read.innerHTML="Read!"
            read.setAttribute("class","read_label")
            container.appendChild(read)
            
    
        })


    container.appendChild(h3)
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(mbutton)
    container.appendChild(rbutton)
    

    document.body.append(container)

    }
}



document.getElementById("add_book").onclick = function(){
    user_title = prompt("What is the title of your book?")
    user_author = prompt("What is the author of your book?")
    user_pagenums = prompt("How many pages are in your book?")
    var user_book = new Book(user_author,user_title,user_pagenums,cur_index)
    library.push(user_book)
    user_book.createCard()
    cur_index += 1
}




