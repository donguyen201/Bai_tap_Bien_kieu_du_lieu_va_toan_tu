<!DOCTYPE html>
<html>
<head>
  <title>Form Đăng ký</title>
</head>
<body>
  <h3>HD</h3>
  <form onsubmit="return handleSubmit()">
    <label>Name: <input type="text" id="name" required></label><br><br>
    <label>Password: <input type="password" id="password" required></label><br><br>
    <label>City of Employment: <input type="text" id="city"></label><br><br>

    <label>Web server:
      <select id="server">
        <option>Choose a server</option>
        <option>Server A</option>
        <option>Server B</option>
      </select>
    </label><br><br>

    <p>Please specify your role:</p>
    <label><input type="radio" name="role" value="Admin"> Admin</label>
    <label><input type="radio" name="role" value="Engineer"> Engineer</label>
    <label><input type="radio" name="role" value="Manager"> Manager</label>
    <label><input type="radio" name="role" value="Guest"> Guest</label><br><br>

    <p>Single Sign-on to the following:</p>
    <label><input type="checkbox" name="sso" value="Mail"> Mail</label>
    <label><input type="checkbox" name="sso" value="Payroll"> Payroll</label>
    <label><input type="checkbox" name="sso" value="Self-service"> Self-service</label><br><br>

    <button type="submit">Login</button>
    <button type="reset">Reset</button>
  </form>

  <script>
    function handleSubmit() {
      const name = document.getElementById("name").value;
      alert("Đăng nhập thành công: " + name);
      return false; // Ngăn form reload lại trang
    }
  </script>
</body>
</html>
