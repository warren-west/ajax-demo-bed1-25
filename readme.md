# Using AJAX to make API calls
In this demo we've used AJAX from JQuery to fetch dog data from the [Dog API](https://dog.ceo/dog-api/documentation).

## Steps to achieve this:

1. Create a new project.
2. Add 3 files:
    - app.js (leave blank for now)
    - index.html (generate the skeleton code with `!`, and link app.js in a `<script>` tag)
    - jsconfig.json (to get JQuery autocomplete in VSCode), and fill it with this:
```JSON
{
    "typeAcquisition": {
        "include": [
            "jquery"
        ]
    }
}
```

3. Add JQuery to your project by including it via [CDN](https://www.jsdelivr.com/package/npm/jquery). It must be pasted in the HTML document **above** your app.js `<script>`.

4. Inspect the JSON data you plan to work with by pasting the URL (https://dog.ceo/api/breeds/image/random) into your browser address bar. You should see the JSON response in your browser, something like this:
```json
{
    "message": "https://images.dog.ceo/breeds/australian-kelpie/Resized_20200214_191118_346649120350209.jpg",
    "status": "success"
}
```
5. Write the JavaScript code necessary to grab that data, and log it to the console.
```javascript
$("document").ready(() => {
    console.log("DOM is ready")

    // store the API URL you'll use in your AJAX request
    const dogApiUrl = "https://dog.ceo/api/breeds/image/random"

    $.ajax({
        url: dogApiUrl,
        success: (response) => {
            console.log(response)
            // response.message -> dog image URL
            // response.status -> "Success" text
        },
        error: () => console.log("Something went wrong.")
    })
})
```

6. Use the data from the response you just logged to make changes to elements on the UI.
    - Add a `<p>` tag to your HTML page with the `id="para-status"`
    - Add a `<img>` tag to your HTML page with the `id="img-dog-breed"`

7. Assign content to these elements, by adding the following JavaScript code into the `success(...)` AJAX function:

```javascript
$("#para-status").text(response.status)
$("#img-dog-breed").attr("src", response.message)
```

> That it! 🙏 <br/>
> With this mechanism of a request to a server, and using the JSON data in the response to manipulate elements on your DOM, the possibilities are endless! ✨<br/>
> Search the internet for a free, public API that exists which serves data you are personally interested in (e.g., football club, Harry Potter, Star Wars, Rick n Morty, etc, etc, etc.) and see if you can retrieve the data and display it on a webpage.<br/>
> Note that some publicly available APIs require you to have an API Key to access their data. We will get to this later.