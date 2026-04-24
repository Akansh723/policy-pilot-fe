import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://policy-pilot-157386566439.europe-west1.run.app/');
  sleep(1);
}