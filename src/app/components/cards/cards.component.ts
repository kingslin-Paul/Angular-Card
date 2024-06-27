import { Component } from '@angular/core';

interface Card{
  bgClass:string;
  imgSrc:string;
  title:string;
  ulBgClass:string;
  items:string[]
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

   cards:Card[]=[
    {
      bgClass:"bg-purple-600",
      imgSrc:'../../../assets/Picture.jpg',
      title:'Easy<br />Onboarding',
      ulBgClass:'bg-purple-300',
      items:['Apply Online','Document Submission','Instant Verification','Support']
    },
    {
      bgClass:"bg-blue-600",
      imgSrc:'../../../assets/Picture.jpg',
      title:'Seamless API<br />Integration',
      ulBgClass:'bg-blue-500',
      items:['Online Submission', 'Automated Verification', 'Document Security', 'Dedicated Support']
    },
    {
      bgClass: 'bg-red-600',
      imgSrc: '../../../assets/Picture.jpg',
      title: 'Quick KYC<br />Verification',
      ulBgClass: 'bg-red-500',
      items: ['Online Submission', 'Automated Verification', 'Document Security', 'Dedicated Support']
    },
    {
      bgClass: 'bg-orange-600',
      imgSrc: '../../../assets/Picture.jpg',
      title: 'Smooth<br />Transaction',
      ulBgClass: 'bg-orange-500',
      items: ['Speed & Efficiency', 'Security', 'User-Friendly Interface', 'Comprehensive Tracking']
    }
   ]

   rotateCards(){
    const firstcard = this.cards.shift();
    if(firstcard !== undefined){
      this.cards.push(firstcard)
    }

   }

}
