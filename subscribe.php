<?php

// Email address verification

function isEmail($email) {
    return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i", $email));
}
if($_POST) {
    
    // Enter succes message
    $varSucces  = $_POST['success_msg']; 

    $subscriber_email = $_POST['email'];

    if(!isEmail($subscriber_email)) {
        $array = array();
        $array['valid'] = 0;
        header('Content-Type: application/json');
        echo json_encode($array);
    } else {

        $array = array();
        // Subscribe via email service
        if ( $_POST['via_email'] ) {

            // Your email
            $emailTo = $_POST['email_to'];

            // Header
            $headers = 'Reply-To: ' . $subscriber_email . "\r\n";

            // Email subject
            $subject = 'New Subscriber';

            // Email body
            $body = "You have a new subscriber from your Page!\n\nEmail: " . $subscriber_email;
            
            mail( $emailTo, $subject, $body, $headers );

        }

        // Mailchimp service
        if( $_POST['via_mailchimp'] ) {

            // MailChimp API credentials
            $apiKey = $_POST['api_key'];
            $listID = $_POST['list_id'];
            
            // MailChimp API URL
            $memberID = md5(strtolower($subscriber_email));
            $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
            $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listID . '/members/' . $memberID;
            
            // member information
            $json = json_encode([
                'email_address' => $subscriber_email,
                'status'        => 'subscribed',
            ]);
            
            // send a HTTP POST request with curl
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            $result = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            $array['poslat_chimp'] = 'poslat_chimp';

        }
            
        $array['valid'] = 1;
        $array['message'] = $varSucces;
        header('Content-Type: application/json');
        echo json_encode($array);

    }

}

?>
