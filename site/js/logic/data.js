var pp = localStorage.getItem('profilePicture');
if(pp != null)
{
    document.getElementById('pp').innerHTML = '<img src="'+ pp +'" width="230px" height="230px">';
}
