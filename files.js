var xhr = new XMLHttpRequest();
xhr.withCredentials = true; // Include cookies in the request

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText); // Handle response
    } else {
      console.error('XHR request failed:', xhr.status);
    }
  }
};

xhr.open('GET', 'https://mail.pc.gov.pk/', true);
xhr.send();