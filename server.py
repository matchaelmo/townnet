from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class SpaHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        requested_path = Path(self.translate_path(self.path))
        if not requested_path.exists() and "." not in Path(self.path).name:
            self.path = "/index.html"
        return super().do_GET()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", 4173), SpaHandler)
    print("Serving Homefor NYC at http://127.0.0.1:4173")
    server.serve_forever()
