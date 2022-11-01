const container = document.querySelector(".card");
const cards = container.querySelectorAll(".component");
const submitBtn = container.querySelector(".submit-btn");
const buttons  = container.querySelectorAll(".rating-ratios>span");

//change the state and the color of the number selected.
buttons.forEach(
    (btn)=>{

        btn.addEventListener(
            'click',()=>{
                const old = container.querySelector(".rating-ratios>span[data-selected]")

                if(old!=null){
                old.removeAttribute("data-selected");
                }
                
                btn.setAttribute("data-selected",true);
            }
        )

    }
);

//submit the anwer and change the card "the view"

submitBtn.addEventListener(
    'click',()=>{
       

        const activEelement = cards.item("data-active");
        
        const result = activEelement.querySelector("span[data-selected]");
        if(result==null)return;

        //otherwise do The following
        const thankPage = cards.item(cards.length-1);
        thankPage.querySelector(".result").textContent = result.textContent;

        thankPage.setAttribute("data-active",true);
        activEelement.removeAttribute("data-active");
         
    }
)