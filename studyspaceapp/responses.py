from simple_chatbot.responses import GenericRandomResponse


class GreetingResponse(GenericRandomResponse):
    choices = ("Hey, how can I help you?",
               "Hello! How can I help you?",
               "Hi! allow me to assist you by asking relevant queries.")


class GoodbyeResponse(GenericRandomResponse):
    choices = ("See you later.",
               "Thanks for visiting.",
               "See ya! Have a nice day.")

class ThanksResponse(GenericRandomResponse):
    choices = ("Your Welcome.",
               "I'm happy to help.",
               "My pleasure.",
               "Any time!")

class DisabilityResponse(GenericRandomResponse):
    choices = ("Please specify what assistance you need during the booking process.",
               "Yes when booking you can choose what support you need.",
               "When booking you can specify whether you need wheelchair access or powered seating or both!")

class FunnyResponse(GenericRandomResponse):
    choices = ("Why did the hipster burn his mouth? He drank the coffee before it was cool.",
               "What did the buffalo say when his son left for college? Bison.",
               "Shall I tell you a joke about butter? Actually I don't want to spread it.")

class CancelResponse(GenericRandomResponse):
    choices = ("The booking can be cancelled anytime before the time of the reservation.",
               "The booking can be cancelled but no later than a day before the reservation.",
               "Yes the booking can be cancelled but please allow a day before the reservation time to do so.")

class HelpResponse(GenericRandomResponse):
    choices = ("Please refresh the browser as the booking may have been taken during the time you were booking.",
               "Please try refreshing the browser as the booking may have been taken.",
               "Hard refresh the browser and try again, if the problem persists get in contact with the helpdesk.",
               "Please retry the booking process as their may have been a problem with the system.")

class TimeResponse(GenericRandomResponse):
    choices = ("You can specify how long you want your booking for when booking.",
               "You can choose how long you want to book for during the booking process.",
               "You can stay for as long as specified during the booking process.")