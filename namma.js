$(document).ready(function() {
    // Attach an event listener to the pickup location input field
    $("#pickup-location").on("input", function() {
        // Get the user's input
        var userInput = $(this).val();
        
        // Send an AJAX request to fetch the list of recommended locations
        $.ajax({
            url: "https://api.stripe.com/v1/terminal/locations",
            data: { q: userInput },
            success: function(response) {
                // Parse the response and create a list of recommended locations
                var locations = response.locations;
                var options = "";
                for (var i = 0; i < locations.length; i++) {
                    options += "<option value='" + locations[i] + "'>";
                }
                
                // Display the list of recommended locations in a dropdown menu
                $("#pickup-location-dropdown").html(options);
            }
        });
    });
});