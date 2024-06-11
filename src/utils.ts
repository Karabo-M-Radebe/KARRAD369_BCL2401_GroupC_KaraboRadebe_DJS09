const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'
import  {Review}  from './interfaces'

export const showReviewTotal = (value: number, reviewer: string, isLoyalty: LoyaltyUser) => {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

export const populateUser = (isReturning : boolean, userName: string ) => {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export const showDetails = (value: boolean | Permissions, element : HTMLDivElement, price: number) => {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export const makeMultiple = (value: number) : string => {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

export const getTopTwoReviews = (reviews : Review[]) : Review[] => {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}