# local-node-mock

A skeletal app built in NodeJS (using Express) to help build HTTP mock endpoints for local development.

Although there are many examples and blogs on the net on how to quickly whip one up using Express, this app provides a quick and easy way to get started with it - simply clone, add your mocks and run.

## Adding Mocks
Add your JSON/XML etc files in `mocks/`. Add entry in the `http-mappers.js` for your mock response handler and another entry in `index.js` for the path to your mock URL.

## Running

Clone this repository and run `npm install`.

Then run `node index.js` to fire it up. It runs: `https://localhost:7777`

## Changing Configs
Configs like environment name in mock URLs or runtime port are in `config.js`. 

## SSL Certs
This app uses dummy generated SSL certs for demo purpose. Please generate fresh pair before running in your server/environment!


## License

(The MIT License)

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



