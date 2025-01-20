export IPADDR="$(ipconfig getifaddr en0)"
open http://$IPADDR:1313/
hugo server --buildDrafts --bind $IPADDR --baseURL "http://$IPADDR"
