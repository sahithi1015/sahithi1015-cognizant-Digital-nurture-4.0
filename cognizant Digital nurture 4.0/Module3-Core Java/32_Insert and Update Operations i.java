import java.sql.*;

class StudentDAO {
    Connection con = DriverManager.getConnection("jdbc:sqlite:test.db");

    StudentDAO() throws Exception {}

    void insert(String name) throws Exception {
        PreparedStatement ps = con.prepareStatement("INSERT INTO students(name) VALUES(?)");
        ps.setString(1, name);
        ps.executeUpdate();
    }

    void update(int id, String name) throws Exception {
        PreparedStatement ps = con.prepareStatement("UPDATE students SET name=? WHERE id=?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
    }
}
