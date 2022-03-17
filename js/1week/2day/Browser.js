const browser = "Safari";

if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log(`${browser} 는 지원되는 브라우저 입니다. `);
} else if (browser === "Edge") {
  console.log(`${browser} 는 일부 기능이 지원되지 않는 브라우저 입니다. `);
} else {
  console.log(`${browser} 는 지원되지 않는 브라우저입니다.`);
}
