<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use App1\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
      new CHat(),
  3500
);

$server->run();
