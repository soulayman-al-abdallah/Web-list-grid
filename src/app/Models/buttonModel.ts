export class ButtonModel {

    buttonName!: string;
    width?: number | string ;
    height?: number | string;
    backgroundColor?: string;
    color? :string;
    fontSize? :string;
    
    constructor(button:ButtonModel){
    
        //console.log("button model")
        
        return{
            buttonName: button.buttonName ? button.buttonName : 'button name default',
            width: button.width || 'fit-content',
            height: button.height || 'fit-content',
            backgroundColor: button.backgroundColor|| 'black',
            color: button.color|| 'white',
            fontSize: button.fontSize|| '12px'
        
        }
      }
  
  }