
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates visitors and accounts in Pendo
        // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id: 'prajwal@abc.com', // Required if user is logged in
                email: 'prajwalxyz@xyz.com',   // Recommended if using Pendo Feedback, or NPS Email
                full_name: 'prajwal a',   // Recommended if using Pendo Feedback
                role:  'admin'       // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:       '550e8400-e29b-41d4-a716-446655440000' , // Highly recommended, required if using Pendo Feedback
                name:  'Beast',     // Optional
                is_paying: true, // Recommended if using Pendo Feedback
                monthly_value: 10000, // Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('106d9ed7-7428-48fe-6b87-5cab1e7f5823');
