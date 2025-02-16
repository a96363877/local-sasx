import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export default function CardPayment(){
  function isValidCreditCard(cardNumber:string) {
      cardNumber = cardNumber.replace(/\D/g, ''); // Remove non-numeric characters
      
      let sum = 0;
      let shouldDouble = false;
      
      for (let i = cardNumber.length - 1; i >= 0; i--) {
          let digit = parseInt(cardNumber[i]);
          
          if (shouldDouble) {
              digit *= 2;
              if (digit > 9) digit -= 9; // Subtract 9 if the result is greater than 9
          }
          
          sum += digit;
          shouldDouble = !shouldDouble;
      }
      
      return sum % 10 === 0;
  }
  
}