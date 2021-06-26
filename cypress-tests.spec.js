import { Mailinator } from "../page-objects/smartaxiom-page"

describe('Mailinator Tests', ()  => {

    const mailinator = new Mailinator()

    it('goes to mailinator website' => {
        mailinator.navigate()
         mailinator.validateTextField()
    })

    it('enter and go test' => {
        mailinator.typeTest()
         mailinator.clickGo()
    })

    it('has links on menu' => {
        mailinator.validatePublicInboxes()
         mailinator.validatePublicSMS()
          mailinator.validatePricing()
    })

    it('has headers' => {
        mailinator.validateFrom()
         mailinator.validateSubject()
          mailinator.validateReceived()
    })

})
