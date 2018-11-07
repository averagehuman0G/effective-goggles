from aiohttp import web
import socketio

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

    
@sio.on('message')
async def message(sid, data):
    print("message ", data)

if __name__ == '__main__':
    web.run_app(app)        
