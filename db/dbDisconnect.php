// include p3dbConnect.php database sql transaction(s)
// include cp3dbDisconnect.onnectStop after database sql transaction(s)
    }
catch(PDOException $e)
    {
    echo "Error: " . $e->getMessage();
    }
$conn = null;
}

?>
