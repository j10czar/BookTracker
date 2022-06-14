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

        const mainpanel = document.getElementById("book-panel")
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
            deleteDataFromLocalStorage(this.index)


        })


        const mbutton = document.createElement("button")
        mbutton.innerHTML="Mark as read"
        mbutton.setAttribute("id","m"+this.index)
        mbutton.setAttribute("type","button")
        mbutton.setAttribute("class","read")
        mbutton.addEventListener("click", () => {

            if(this.read) 
            {
                document.getElementById("div"+this.index).style.borderColor="rgb(0, 0, 0)"
                mbutton.innerHTML="Mark as read"
                this.read=false   
            }
            else 
            {
                document.getElementById("div"+this.index).style.borderColor="rgb(31, 208, 45)"
                mbutton.innerHTML="Mark as unread"
                this.read=true
            }
        })


    container.appendChild(h3)
    container.appendChild(p1)
    container.appendChild(p2)
    container.appendChild(mbutton)
    container.appendChild(rbutton)
    mainpanel.appendChild(container)

    


    }
}



document.getElementById("add_book").onclick = function(){
    document.querySelector('.bg-modal').style.display = 'flex'
    
}

document.getElementById("button-submit").addEventListener('click',function(){ 
    user_title = document.getElementById('user-title').value
    user_author = document.getElementById('user-author').value
    user_pagenums = document.getElementById('user-pages').value

    if(user_title==""||user_title.length>100)
    {
        document.getElementById('user-title').style.border = "2px solid rgb(247, 77, 77)"
    }
    else if(user_author==""||user_title.length>100)
    {
        document.getElementById('user-author').style.border = "2px solid rgb(247, 77, 77)"
    }
    else if(user_pagenums<0 || user_pagenums>10000 || user_pagenums=="")
    {
        document.getElementById('user-pages').style.border = "2px solid rgb(247, 77, 77)"
    }
    else{
        document.getElementById('user-title').value=''
        document.getElementById('user-author').value=''
        document.getElementById('user-pages').value=''
        document.getElementById('user-title').style.border = "2px solid rgb(221, 221, 221)"
        document.getElementById('user-author').style.border = "2px solid rgb(221, 221, 221)"
        document.getElementById('user-pages').style.border = "2px solid rgb(221, 221, 221)"
        document.querySelector('.bg-modal').style.display='none'
        var user_book = new Book(user_author,user_title,user_pagenums,cur_index)
        library.push(user_book)
        user_book.createCard()
        saveDataToLocalStorage(cur_index,user_book)
        cur_index += 1

    }
    
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none'
    document.getElementById('user-title').value=''
    document.getElementById('user-author').value=''
    document.getElementById('user-pages').value=''
    document.getElementById('user-title').style.border = "2px solid rgb(221, 221, 221)"
    document.getElementById('user-author').style.border = "2px solid rgb(221, 221, 221)"
    document.getElementById('user-pages').style.border = "2px solid rgb(221, 221, 221)"
})

function loadDataFromLocalStorage(key) {
    if (localStorage && localStorage[key]) {
      obj = JSON.parse(localStorage[key])
      return obj
    }
    console.log("didnt return an object")
    return null
  }
function saveDataToLocalStorage(key, obj) {
    if (localStorage) {
      localStorage[key] = JSON.stringify(obj)
    }
  }
function deleteDataFromLocalStorage(key) {
    if (localStorage) {
      localStorage.removeItem(key)
    }
  }



var loadedLibrary = []

if(localStorage.length>1)
{
    console.log("Local storage found!")

    for(let key in localStorage)
    {
        try {
            let loadedBook = Object.assign(new Book(), loadDataFromLocalStorage(key))
            loadedLibrary.push(loadedBook)
            
        } catch (error) {
            console.log("lol")
            
        }


        

        // loadedBook.createCard() 

    }
    console.log(loadedLibrary)


    for(var i = 0; i<loadedLibrary.length-1;i++)
    {
        let loadedBook = loadedLibrary[i]
        console.log(loadedLibrary[i])

        loadedBook.createCard() 

    }

    let indexFinder = Object.assign(new Book(), loadDataFromLocalStorage(localStorage.length-1))
    cur_index = indexFinder.index

    
      
}
else
{
    console.log("No local storage found.")
}