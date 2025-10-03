$("document").ready(() => {

    // Use this code with a button, if you want the API request to happen when a button is clicked
    // $("#btn").on("click", () => {

    // })

    console.log("DOM is ready")

    // to get JQuery auto-complete
    // 1. Add a jsconfig.json file to your project
    // 2. Add the following JSON to the file:
    /**
     * {
            "typeAcquisition": {
                "include": [
                    "jquery"
                ]
            }
        }
     */
    // src: https://stackoverflow.com/questions/33902077/jquery-intellisense-in-visual-studio-code

    // store the API URL you'll use in your AJAX request
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random"

    // create a variable to store the dog data we receive
    let dogData = undefined

    $.ajax({
        url: dogApiUrl,
        success: (response) => {
            console.log(response)
            // response.message -> dog image URL
            // response.status -> "Success" text

            dogData = response.message

            $("#para-status").text(response.status)
            $("#img-dog-breed").attr("src", dogData)

        },
        error: () => console.log("Something went wrong.")
    })

    // ctrl + / = comments out the line you're on, or the lines you've selected
    // $.ajax({
    //     success: function(response) {
    //         console.log(response)
    //     }
    // })


    
})