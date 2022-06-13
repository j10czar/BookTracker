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
            document.getElementById("div"+this.index).style.borderColor="rgb(31, 208, 45)"
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
    document.querySelector('.bg-modal').style.display = 'flex'
    
}

document.getElementById("button-submit").addEventListener('click',function(){ 
    user_title = document.getElementById('user-title').value
    user_author = document.getElementById('user-author').value
    user_pagenums = document.getElementById('user-pages').value

    if(user_title=="")
    {
        document.getElementById('user-title').style.border = "2px solid rgb(247, 77, 77"
    }
    else if(user_author=="")
    {
        document.getElementById('user-author').style.border = "2px solid rgb(247, 77, 77"
    }
    else if(user_pagenums<0 || user_pagenums>10000 || user_pagenums=="")
    {
        document.getElementById('user-pages').style.border = "2px solid rgb(247, 77, 77"
    }
    else{
        document.querySelector('.bg-modal').style.display='none'
        var user_book = new Book(user_author,user_title,user_pagenums,cur_index)
        library.push(user_book)
        user_book.createCard()
        cur_index += 1

    }
    
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none'
})




