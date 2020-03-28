# local-node-mock

Local mock skeletal app in nodejs (using Express) to help local development. 

Add your JSON/XML etc files in `mocks/`. Add entry in the `http-mappers.js` for your mock and another entry in `index.js` for the path to your mock URL.

## Running

Clone this repository and run `npm install`.

Then run `node index.js` to fire it up. It runs: `https://localhost:7777`


## Changing Configs
Configs like environment name in mock URLs or runtime port are in `config.js`. 

## SSL Certs
This app has dummy geneated ssl certs for demo purposes. Please generate fresh pair when running in your server/environment!


## License

(The MIT License)

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



